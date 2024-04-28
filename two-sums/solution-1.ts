function twoSum(nums: number[], target: number): number[] {
  const result = [];

  const itemIndexMap = {};

  for (let i = 0; i < nums.length; i++) {
    const currentItem = nums[i];

    const diff = target - currentItem;

    if (itemIndexMap[diff] !== undefined) {
      return [itemIndexMap[diff], i];
    }

    itemIndexMap[currentItem] = i;
  }

  return [];
}

const numsA = [2, 3, 8, 4];
const targetA = 7;
const resultA = twoSum(numsA, targetA);
console.log(resultA);
