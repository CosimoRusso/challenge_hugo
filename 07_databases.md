# Databases

Relational and non-relational database have many difference and use-cases, the most important is related to the properties of the database: while relational databases guarantee the ACID properties:

- **Atomicity** a transaction must either succed or rollback, it cannot be partially-complete, even if the system fails.
- **Consistency** every transaction must affect data only in ways that respect the database invariants.
- **Isolation** concurrent transactions must not influence each other.
- **Durability** the results of a succesful transaction must be persistent.

, NoSQL technologies, that are thought to work in a distributed environment to scale horizontally, adhere to the CAP theorem, stating that only 2 of the following 3 properties can be satisfied at the same time:

- **Consistency** every read receives the most recent write, or an error
- **Availability** Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
- **Partition tolerance** The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.

In general, SQL databases should be preferred when the data strictly requires the ACID properties, or if the structure of the data is well defined, as it is more difficult to change it in production. A valid relational database is PostgreSQL, which provides the NPM module [node-postgres](https://node-postgres.com/)

NoSQL database, on the other hand, are better use for a data structure that is not well defined, or if the size of the dataset is really big and there is not the need to be consistent. The most famous non-relational database is probably MongoDB, which also provides a [NodeJS module](https://github.com/mongodb/node-mongodb-native)