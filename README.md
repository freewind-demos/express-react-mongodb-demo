Express React Mongodb Demo
===========================

Install mongodb
---------------

See <https://github.com/js-demos/mongoose-demo>

Start the db for this project
-----------------------------

```
mkdir /tmp/express-react-mongodb-demo-db
mongod --dbpath /tmp/express-react-mongodb-demo-db
```

Setup this project
------------------

```
npm install
```

Run:

```
npm start
```

Then visit <http://localhost:3000>:

- You can click on the `初始化数据` to init data in mongodb, and you will see a list of students.
- You can click on the `删除` button to delete a student
