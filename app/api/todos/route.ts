import { connectdb } from "@/lib/db";
import Todo from "@/models/todo";

export async function GET() {
  try {
    await connectdb();
    const todos = await Todo.find();
    return todos
  } catch (error) {
    
  }
}
