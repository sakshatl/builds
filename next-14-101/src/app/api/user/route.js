import User from "@/models/user";
import { connectMongoDB } from "@/utils/mongodb";

export async function POST(request) {
  const { name, email } = await request.json();

  console.log(name, email);

  try {
    await connectMongoDB();
    await User.create({ name, email });
  } catch (err) {
    console.log(err.message)
  }


  return Response.json("hello world");

}