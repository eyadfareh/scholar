import pb from "$lib/db";

export async function load({ params }){
  const section = await pb.collection('sections').getOne(params.id);
  const questions = (await pb.collection('questions').getList(1, 50, {
    filter: `section.id = "${params.id}"`,
  })).items;
  return {
    id: params.id,
    section,
    questions
  }
}
