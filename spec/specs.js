describe('stringSplitter', function() {
  it("takes a string and uses every non space character to make an array of strings", function() {
    expect(stringSplitter("This is the worst program Ive ever seen")).to.equal("tsormvehtroienihsgvrsetresiwpaee")
  })
})
