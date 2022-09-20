const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
})

const producer = kafka.producer()

const run = async () =>{
	await producer.connect()
	no = 1;
	setInterval( async () => {
		await producer.send({
			topic: 'quickstart-events3',
			messages: [
				{ value: 'apa'+no },
			],
		})
		no++;
	}, 1000);
	
	// await producer.disconnect()
}

run().catch(console.error)