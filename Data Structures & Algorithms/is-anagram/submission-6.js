class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = [];

        for (const c of t) count[c] = (count[c] || 0) +1;
        for (const c of s) {
            if (!count[c]) return false; // not exists or already zero
            count[c]--;
        }

        for (const k in count) {
            if (count[k] !== 0) {
                return false;
            }
        }

        return true;
    }
}
