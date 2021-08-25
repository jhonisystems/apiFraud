const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccount.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

class Data {
  async insertarVerificacion(trans) {
    const dbref = db.collection("transaction");
    const objExist = await this.fraudByIdDoc(trans.transaction_id);

    if (objExist.length > 0) {
      const arrReduce = objExist.reduce((acc, el) => acc.concat(el), []);
      if (arrReduce[1].transaction_id === trans.transaction_id) {
        dbref.doc(arrReduce[0]).update(trans);
      } else {
        dbref.add(trans);
      }
    } else {
      dbref.add(trans);
    }
    return dbref.id;
  }

  async allFraud() {
    const dbref = db.collection("transaction");
    const docsSnap = await dbref.get();
    return docsSnap.docs.map((doc) => doc.data());
  }

  async fraudById(id) {
    const dbref = db
        .collection("transaction")
        .where("transaction_id", "==", id);
    const docsSnap = await dbref.get();
    return docsSnap.docs.map((doc) => doc.data());
  }

  async fraudByIdDoc(id) {
    const dbref = db
        .collection("transaction")
        .where("transaction_id", "==", id);
    const docsSnap = await dbref.get();
    const data = docsSnap.docs.map((doc) => [doc.id, doc.data()]);
    return data === undefined ? [] : data;
  }

  async fraudPagination(page, size) {
    let total = 0;
    let paginas = 0;
    const frauds = [];

    await db
        .collection("transaction")
        .get()
        .then((res) => {
          total = res.size;
          paginas = Math.ceil(total / size);
        });

    await db
        .collection("transaction")
        .limit(size)
        .orderBy("transaction_id")
        .startAfter(size * (page - 1))
        .get()
        .then((res) => {
          res.forEach((item) => {
            frauds.push(item.data()["transaction_id"]);
          });
        });

    return {
      total: total,
      paginas: paginas,
      datosPorPagina: size,
      pagina: page,
      datos: frauds
    };
  }
}

module.exports = Data;
