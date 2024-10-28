export const HashMap = function () {
  const buckets = new Array(16).fill(null); // Start with 16 buckets

  return {
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      const bucketSize = buckets.length;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketSize;
      }
      return hashCode;
    },
    set(key, value) {
      const hash = this.hash(key);
      if (!buckets[hash]) {
        buckets[hash] = [];
      }

      for (let i = 0; i < buckets[hash].length; i++) {
        if (buckets[hash][i].key === key) {
          buckets[hash][i].value = value;
          return;
        }
      }

      buckets[hash].push({ key, value });

      this.checkLoadFactor();
    },
    get(key) {
      const hash = this.hash(key);
      const bucket = buckets[hash];
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i].key === key) {
            return bucket[i].value;
          }
        }
      }
      return null;
    },
    has(key) {
      const hash = this.hash(key);
      const bucket = buckets[hash];
      return bucket ? bucket.some((entry) => entry.key === key) : false;
    },
    remove(key) {
      const hash = this.hash(key);
      const bucket = buckets[hash];
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i].key === key) {
            bucket.splice(i, 1);
            return true;
          }
        }
      }
      return false;
    },
    length() {
      let count = 0;
      for (const bucket of buckets) {
        if (bucket) {
          count += bucket.length;
        }
      }
      return count;
    },
    clear() {
      buckets.length = 16;
      buckets.fill(null);
    },

    checkLoadFactor() {
      const loadFactor = this.length() / buckets.length;
      if (loadFactor > 0.75) {
        this.resize();
      }
    },
    resize() {
      const oldBuckets = buckets.slice();
      buckets.length = buckets.length * 2;
      buckets.fill(null);

      for (const bucket of oldBuckets) {
        if (bucket) {
          for (const entry of bucket) {
            this.set(entry.key, entry.value);
          }
        }
      }
    },
    keys() {
      const keys = [];
      for (const bucket of buckets) {
        if (bucket) {
          for (const entry of bucket) {
            keys.push(entry.key);
          }
        }
      }
      return keys;
    },
    values() {
      const values = [];
      for (const bucket of buckets) {
        if (bucket) {
          for (const entry of bucket) {
            values.push(entry.value);
          }
        }
      }
      return values;
    },

    entries() {
      const entries = [];
      for (const bucket of buckets) {
        if (bucket) {
          for (const entry of bucket) {
            entries.push([entry.key, entry.value]);
          }
        }
      }
      return entries;
    },
  };
};
