import { expect } from "chai"
import sinon from "sinon"
const chai = require('chai')
const should = chai.should()
const chaiHTTP = require('chai-http')
const server = require('../index.js')

describe("Word watch functions", () => {
  describe("GET /api/v1/top_word", () => {
    it("they should see the top word along with it's count", () => {
      return chai.request(server)
      .get("/api/v1/top_word")
      .then(response => {
        response.should.have.status(200)
        response.should.be.json
      })
    })
  })
})

