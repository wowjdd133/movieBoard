import User from './models/User';
import Board from './models/Board';
import Comment from './models/Comment';
import Recomment from './models/Recomment';

type User = {
  input: {
    name: string,
    email: string,
    gender: string,
    phoneNumber: string,
    password: string,
  }
}

type Board = {
  input: {
    title: string,
    content: string,
    author: string,
    comment?: [string],
    create_at: Date,
  }
}

type Comment = {
  input: {
    content: string,
    author: string,
    recmomment?: string,
    create_at: Date,
  }
}

type Recomment = {
  input: {
    content: string,
    author: string,
    comment: string,
    create_at: Date,
  }
}

type ID = {
  _id: string,
}

const resolvers = {
  Query: {
    async Users(_:void, args:void) {
      try{
        return await User.find();
      } catch(err){
        console.error(err);
      }
    },
    async Boards(_:void, args:void) {
      try{
        return await Board.find();
      } catch(err){
        console.error(err);
      }
    },
    async Comments(_:void, args:ID) {
      try{
        return await Comment.find({board: args._id});
      } catch(err){
        console.error(err);
      }
    },
    async Recomments(_:void, args:ID) {
      try{
        return await Recomment.find({comment: args._id});
      } catch(err){
        console.error(err);
      }
    }
  },
  Mutation: {
    async createUser(_:void, args:User) {
      try{
        console.log(args.input);
        return await User.create(args.input);
      } catch(err){
        console.error(err);
      }
    }
    // async deleteUser
    // async updateUser
  }
};

export default resolvers;