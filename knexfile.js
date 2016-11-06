// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'meetup'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
    	database: 'postgres://hupjxylgdwcmsi:9L-S0UVUEerf-8aL921Nl-ixM-@ec2-54-163-239-218.compute-1.amazonaws.com:5432/dc5e5mc3gbech9'
    }
  }
}