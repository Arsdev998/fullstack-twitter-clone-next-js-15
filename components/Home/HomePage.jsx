"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import HeadPost from "./post/HeadPost";
import PostListFollowing from "./post/PostListFollowing";
import PostListForU from "./post/PostListForU";

const HomePage = () => {
  return (
    <div className="">
      <Tabs defaultValue="for-u">
        <TabsList className="flex justify-around  w-full bg-black/40 backdrop-blur-md  sticky top-0 border-b-[1px] rounded-none">
          <TabsTrigger value="for-u">Untuk Anda</TabsTrigger>
          <TabsTrigger value="following">Mengikuti</TabsTrigger>
        </TabsList>
        <HeadPost />
        <TabsContent value="for-u">
          <PostListForU />
        </TabsContent>
        <TabsContent value="following">
          <PostListFollowing />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomePage;
