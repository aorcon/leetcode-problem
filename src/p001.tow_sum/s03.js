/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    let n1;
    for (n1 = 0; n1 < nums.length; n1 ++) {
        let n2 = map.get(target - nums[n1])
        if (n2 != undefined) {
            return [n2, n1];
        } else {
            map.set(nums[n1], n1);
        }
    }
};
/**
Approach 3: One-pass Hash Table
Complexity Analysis:

    Time complexity : O(n). We traverse the list containing n elements only once. 
    Each look up in the table costs only O(1) time.

    Space complexity : O(n). The extra space required depends on the number of 
    items stored in the hash table, which stores at most nn elements.

 */