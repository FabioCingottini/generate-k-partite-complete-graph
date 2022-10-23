const {generateKPartiteCompleteGraph} = require("./generateKPartiteCompleteGraph");

describe('Test generate-k-partite-complete-graph', function () {
  const testUtils = {
    summatory(numbers) {
      return numbers.reduce((sum, n) => sum + n, 0);
    }
  }

  it("Should return a a map representing a proper k partite complete graph for given parameter [1, 2, 1, 7, 1]", function () {
    // arrange
    const partitionsDescription = [1, 2, 1, 7, 1];
    const expectedAmountOfNodes = testUtils.summatory(partitionsDescription);
    const expectedNeighboursNode1 = ['2', '3'];
    const expectedNeighboursNode2 = ['1', '4'];
    const expectedNeighboursNode3 = ['1', '4'];
    const expectedNeighboursNode4 = ['2', '3', '5', '6', '7', '8', '9', '10', '11'];
    const expectedNeighboursNode5 = ['4', '12'];
    const expectedNeighboursNode6 = ['4', '12'];
    const expectedNeighboursNode7 = ['4', '12'];
    const expectedNeighboursNode8 = ['4', '12'];
    const expectedNeighboursNode9 = ['4', '12'];
    const expectedNeighboursNode10 = ['4', '12'];
    const expectedNeighboursNode11 = ['4', '12'];
    const expectedNeighboursNode12 = ['5', '6', '7', '8', '9', '10', '11'];

    // act
    const graph = generateKPartiteCompleteGraph(partitionsDescription);

    // assert
    expect(graph.size).toEqual(expectedAmountOfNodes)
    expect(graph.get('1')).toEqual(expectedNeighboursNode1);
    expect(graph.get('2')).toEqual(expectedNeighboursNode2);
    expect(graph.get('3')).toEqual(expectedNeighboursNode3);
    expect(graph.get('4')).toEqual(expectedNeighboursNode4);
    expect(graph.get('5')).toEqual(expectedNeighboursNode5);
    expect(graph.get('6')).toEqual(expectedNeighboursNode6);
    expect(graph.get('7')).toEqual(expectedNeighboursNode7);
    expect(graph.get('8')).toEqual(expectedNeighboursNode8);
    expect(graph.get('9')).toEqual(expectedNeighboursNode9);
    expect(graph.get('10')).toEqual(expectedNeighboursNode10);
    expect(graph.get('11')).toEqual(expectedNeighboursNode11);
    expect(graph.get('12')).toEqual(expectedNeighboursNode12);
    ``
  });

  it("Should return a a map representing a proper k partite complete graph for given parameter [3, 4, 4]", function () {
    // arrange
    const partitionsDescription = [3, 4, 4];
    const expectedAmountOfNodes = testUtils.summatory(partitionsDescription);
    const expectedNeighboursNode1 = ['4', '5', '6', '7'];
    const expectedNeighboursNode2 = ['4', '5', '6', '7'];
    const expectedNeighboursNode3 = ['4', '5', '6', '7'];
    const expectedNeighboursNode4 = ['1', '2', '3', '8', '9', '10', '11'];
    const expectedNeighboursNode5 = ['1', '2', '3', '8', '9', '10', '11'];
    const expectedNeighboursNode6 = ['1', '2', '3', '8', '9', '10', '11'];
    const expectedNeighboursNode7 = ['1', '2', '3', '8', '9', '10', '11'];
    const expectedNeighboursNode8 = ['4', '5', '6', '7'];
    const expectedNeighboursNode9 = ['4', '5', '6', '7'];
    const expectedNeighboursNode10 = ['4', '5', '6', '7'];
    const expectedNeighboursNode11 = ['4', '5', '6', '7'];

    // act
    const graph = generateKPartiteCompleteGraph(partitionsDescription);

    // assert
    expect(graph.size).toEqual(expectedAmountOfNodes)
    expect(graph.get('1')).toEqual(expectedNeighboursNode1);
    expect(graph.get('2')).toEqual(expectedNeighboursNode2);
    expect(graph.get('3')).toEqual(expectedNeighboursNode3);
    expect(graph.get('4')).toEqual(expectedNeighboursNode4);
    expect(graph.get('5')).toEqual(expectedNeighboursNode5);
    expect(graph.get('6')).toEqual(expectedNeighboursNode6);
    expect(graph.get('7')).toEqual(expectedNeighboursNode7);
    expect(graph.get('8')).toEqual(expectedNeighboursNode8);
    expect(graph.get('9')).toEqual(expectedNeighboursNode9);
    expect(graph.get('10')).toEqual(expectedNeighboursNode10);
    expect(graph.get('11')).toEqual(expectedNeighboursNode11);
  });

  it("Should return a a map representing a proper k partite complete graph for given parameter [1, 1, 1, 1, 1, 1]", function () {
    // arrange
    const partitionsDescription = [1, 1, 1, 1, 1, 1];
    const expectedAmountOfNodes = testUtils.summatory(partitionsDescription);
    const expectedNeighboursNode1 = ['2'];
    const expectedNeighboursNode2 = ['1', '3'];
    const expectedNeighboursNode3 = ['2', '4'];
    const expectedNeighboursNode4 = ['3', '5'];
    const expectedNeighboursNode5 = ['4', '6'];
    const expectedNeighboursNode6 = ['5'];

    // act
    const graph = generateKPartiteCompleteGraph(partitionsDescription);

    // assert
    expect(graph.size).toEqual(expectedAmountOfNodes)
    expect(graph.get('1')).toEqual(expectedNeighboursNode1);
    expect(graph.get('2')).toEqual(expectedNeighboursNode2);
    expect(graph.get('3')).toEqual(expectedNeighboursNode3);
    expect(graph.get('4')).toEqual(expectedNeighboursNode4);
    expect(graph.get('5')).toEqual(expectedNeighboursNode5);
    expect(graph.get('6')).toEqual(expectedNeighboursNode6);
  });
});