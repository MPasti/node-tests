import * as nodeFiles from "fs/promises";

export async function fetchData(file) {
  const data = await nodeFiles.readFile(`database/${file}`, {
    encoding: "utf-8",
  });
  return JSON.parse(data);
}

export async function writeData(file, data) {
  await nodeFiles.writeFile(`database/${file}`, JSON.stringify(data, null, 2));
  return true;
}

export async function moveData(file, newFile) {
  try {
    const data = await fetchData(file);
    await writeData(newFile, data);
    await writeData(file, []);
    return true;
  } catch (error) {
    return false;
  }
}
