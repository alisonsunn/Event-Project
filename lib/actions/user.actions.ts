'use server'

import { CreateUserParams, UpdateUserParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model"
import { Database } from "lucide-react"
import { clerkMiddleware } from "@clerk/nextjs/server"

// createUser
export const createUser = async (user: CreateUserParams) => {
  
  try {
    // connect the database
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    handleError(error)
  }
}

// updateUser
export const updateUser = async (clerkId: String,user: UpdateUserParams ) => {
  try {
    await connectToDatabase();

    const newUser = await User.findByIdAndUpdate(
      clerkId,
      user,
      {new: true}
    )
    return JSON.parse(JSON.stringify(newUser));

  } catch (error) {
    handleError(error)
  }
}

// deleteUser
export const deleteUser = async (clerkId: String) => {
  try {
    const deletedUser = await User.findByIdAndDelete(clerkId);
    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    handleError(error)
  }
}

// getUser 
export const getUser = async (id: String) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found!")
    }
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error)
  }
}
