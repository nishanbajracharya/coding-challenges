function containsDuplicate(nums: number[]): boolean {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) return true;

        map[nums[i]] = 1;
    }

    return false;
};