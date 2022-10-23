/**
 * Given an array of numbers `A` of length `K` returns a `K` complete partite graph in which every partition
 * `P[i]` has `A[i]` amount of nodes.
 * The returned graph is a JavaScript Map where keys are base 10 stringified numbers representing nodes names and values
 * are arrays of base 10 stringified numbers representing the neighbours of the node corresponding to that key.
 * The function grants to return a proper value given a proper parameter, the parameter must be an array of positive
 * integer numbers. The function does not perform any check on the given parameter.
 * The algorithm has a time complexity of O(2V) and a space complexity of O(2V) where V is the number of nodes in the
 * graph.
 *
 * @param {number[]} partitionsDescription - An array of numbers in which every item the desired amount of nodes for that partition.
 *
 * @return {Map<string, string>} graph - The generated k partite complete graph.
 *
 * @example
 * ```javascript
 * const graph = generateKPartiteCompleteGraph([3, 2, 5, 1, 2]);
 *
 * // The graph representation is:
 * Map(13) {
 *   '1' => [ '4', '5' ],
 *   '2' => [ '4', '5' ],
 *   '3' => [ '4', '5' ],
 *   '4' => [
 *     '1', '2',  '3',
 *     '6', '7',  '8',
 *     '9', '10'
 *   ],
 *   '5' => [
 *     '1', '2',  '3',
 *     '6', '7',  '8',
 *     '9', '10'
 *   ],
 *   '6' => [ '4', '5', '11' ],
 *   '7' => [ '4', '5', '11' ],
 *   '8' => [ '4', '5', '11' ],
 *   '9' => [ '4', '5', '11' ],
 *   '10' => [ '4', '5', '11' ],
 *   '11' => [
 *     '6',  '7',  '8',
 *     '9',  '10', '12',
 *     '13'
 *   ],
 *   '12' => [ '11' ],
 *   '13' => [ '11' ]
 * }
 * ```
 */
function generateKPartiteCompleteGraph(partitionsDescription) {
  let totNodes = 0;
  // During the first iteration the goal is to create an array of array of base 10 stringified numbers representing
  // nodes names. Every array in the array contains nodes in same partitions.
  const partitions = [];
  for (const partitionSize of partitionsDescription) {
    const partition = [];
    for (let i = 0; i < partitionSize; i++) {
      totNodes++
      const nodeName = totNodes.toString(10);
      partition.push(nodeName)
    }
    partitions.push(partition)
  }
  // During the second iteration the goal is to create the graph map, in which every node must be linked to every node
  // in the previous partition and the next partition but must not be linked to nodes in the same partition.
  const graph = new Map();
  for (let i = 0; i < partitions.length; i++) {
    const prevPartition = partitions[i - 1];
    const thisPartition = partitions[i];
    const nextPartition = partitions[i + 1];
    for (let j = 0; j < thisPartition.length; j++) {
      const nodeName = thisPartition[j];
      const neighbours = []
      if (prevPartition) {
        neighbours.push(...prevPartition);
      }
      if (nextPartition) {
        neighbours.push(...nextPartition);
      }
      graph.set(nodeName, neighbours);
    }
  }
  return graph;
}

module.exports = {generateKPartiteCompleteGraph}
