'use server'

import { CreateUserParams, UpdateUserParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model"
import { revalidatePath } from "next/cache"

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

    const newUser = await User.findOneAndUpdate(
      {clerkId: clerkId},
      user,
      {new: true}
    )
    
    if (!newUser) throw new Error('User update failed');
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error)
  }
}

// deleteUser
export const deleteUser = async (clerkId: String) => {
  try {

    await connectToDatabase();

    const userToDelete = await User.findOne({ clerkId })

    if (!userToDelete) {
      throw new Error('User not found')
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id)
    revalidatePath('/')

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
  } catch (error) {
    handleError(error)
  }
}

// getUser 
export const getUser = async (userId: String) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found!")
    }
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error)
  }
}
