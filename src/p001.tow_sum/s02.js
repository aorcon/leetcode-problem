/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    nums.forEach((num, index) => {
        map.set(num, index);
    })
    let n1;
    for (n1 = 0; n1 < nums.length; n1 ++) {
        let n2 = map.get(target - nums[n1])
        if (n2 > n1) {
            return [n1, n2];
        }
    }
}
/** Approach 2: Two-pass Hash Table  */
/**
Complexity Analysis:

    Time complexity : O(n). We traverse the list containing n elements 
    exactly twice. Since the hash table reduces the look up time to O(1), 
    the time complexity is O(n).

    Space complexity : O(n). The extra space required depends on the 
    number of items stored in the hash table, which stores exactly n elements.

 */