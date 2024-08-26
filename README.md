
# Kafka Rider Updates System

This project demonstrates a Kafka-based messaging system for managing rider updates. It includes a Kafka producer that sends rider location updates and a Kafka consumer that processes these updates based on their location. The system uses Docker to set up Kafka and Zookeeper services.


## Prerequisites

- Node.js (v14 or higher)
- Docker
- Kafka and Zookeeper






## Project Structure

- **admin.js**: Handles Kafka administration tasks like creating topics.
- **client.js**: Configures and exports a Kafka client instance.
- **producer.js**: Produces rider location updates to the Kafka topic.
- **consumer.js**: Consumes rider location updates from the Kafka topic.



## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/kafka-rider-updates.git
cd kafka-rider-updates

```

2. Install dependencies:
```bash
npm install
```
## Usage

**Setting Up Kafka and Zookeeper**

1. Run Zookeeper:

```bash
docker run -p 2181:2181 zookeeper
```
2. Run Kafka:

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```
**Creating Kafka Topics**

1. Run the `admin.js` script to create the required Kafka topic:

```bash
node producer.js
```

**Running the Producer**

1. Run the `producer.js` script to start sending rider location updates:

```bash
node producer.js
```

2. Enter rider location updates in the format:

```bash
riderName location
```

For example:

```bash
John north
```

**Running the Consumer**

1. Run the `consumer.js` script with a group ID to start consuming messages:

```bash
node consumer.js <groupId>
```

Example:

```bash
node consumer.js group1
```

2. The consumer will start receiving and processing rider location updates.

