module.exports = {
  dialect: 'postgress',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'gonodemodulo2',
  operatorAliases: false,
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true
  }
}