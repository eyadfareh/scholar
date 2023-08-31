import pb from "$lib/db";

export async function load({ params }){
  const course = await pb.collection('courses').getOne(params.id);
  const chaptersData = (await pb.collection('chapters').getList(1, 50, {
    filter: `course.id = "${params.id}"`,
    sort: "+number"
  })).items;
  let chapters = [];
  for(let i=0;i<chaptersData.length; i++){
    chapters.push(chaptersData[i]);
    const sections = await pb.collection('sections').getFullList({
      filter: `chapter.id = "${chapters[i].id}"`,
      sort: '+number',
    });
    chapters[i].sections = sections;
  }
  return {
    id: params.id,
    course,
    chapters
  }
}
