// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'meetup'
    }
  },
  production: {
    client: 'postgres',
    connection: {
    	database: 'postgres://khfkddtflrnpxu:a9z9twNRlF7w-x6Zpra4w5X9qA@ec2-54-243-63-130.compute-1.amazonaws.com:5432/dbobavr3ktlfd5'
    }
  }
}