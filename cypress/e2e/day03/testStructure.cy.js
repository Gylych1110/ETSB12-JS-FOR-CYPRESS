const { beforeEach, afterEach } = require("node:test")

describe("First Test Suit", function(){

  before(function(){
  })

  after(function(){
  })

  beforeEach(function(){
  })

  afterEach(function(){
  })

  it("First Test Case", function () {
    //test case 1
  })

  it("Second Test Case", function () {
    //test case 1
  })

  it("Third Test Case", function () {
    //test case 1
  })
})


context("Second Test Suit", () => {

  before(() => {
  })

  after(() => {
  })

  beforeEach(() => {
  })

  afterEach(() => {
  })

  it.skip("First Test Case", function () {
    //test case 1 ) (it will be skipped)
  })

  it("Second Test Case", function () {
    //test case 1
  })

  it("Third Test Case", function () {
    //test case 1
  })
})
