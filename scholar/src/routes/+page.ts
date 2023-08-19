import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function load({ params }) {
  const records = await pb.collection('courses').getFullList({
    sort: '-created',
  });
  return {
    courses: records
  };
}
