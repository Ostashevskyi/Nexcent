import CustomLink from "@/components/Link";

export default function Home() {
  return (
    <div className="flex gap-4 m-5">
      <CustomLink to={"/"} variant={"link_normal"}>
        Text
      </CustomLink>
    </div>
  );
}
