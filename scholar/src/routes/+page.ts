import pb from "$lib/db";
export async function load({ params }) {
  const records = await pb.collection('courses').getFullList({
    sort: '-created',
  });
  return {
    courses: records
  };
}
