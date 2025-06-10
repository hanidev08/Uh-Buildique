import { sampleData } from "@/sampleData";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import "./style.scss";

const getPageData = (slug: string) => {
  return sampleData.find((sample) => sample.slug === slug);
};
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const data = getPageData(slug);
  if (!data) return notFound();
  return (
    <section>
      <div className=" container py-40">
        <h2 className="heading uppercase">{data.title}</h2>
        <div className=" relative w-[100vw] max-w-[1300px] aspect-[8/5]">
          <Image
            src={data.src}
            alt={data.title}
            fill
            className=" object-cover"
          />
        </div>
        <div className=" mt-40">
          <div className=" flex justify-center items-center">
            <div className="relative w-[50vw] max-w-[800px] aspect-[4/5]">
              <Image
                src={data.images[0]}
                alt=""
                fill
                className=" object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" mt-40">
          <div className=" flex justify-center items-center">
            <div className="relative w-[90vw] max-w-[1000px] aspect-[8/5]">
              <Image
                src={data.images[1]}
                alt=""
                fill
                className=" object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" mt-40">
          <div className=" flex justify-center items-center">
            <div className="relative w-[50vw] max-w-[800px] aspect-[4/5]">
              <Image
                src={data.images[2]}
                alt=""
                fill
                className=" object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" mt-40">
          <div className=" flex justify-center items-center">
            <div className=" relative w-[100vw] max-w-[1300px] aspect-[8/5]">
              <Image
                src={data.images[3]}
                alt=""
                fill
                className=" object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" mt-40">
            <div className=" flex flex-col md:flex-row justify-center gap-4 items-center">
              <div className=" relative w-[100vw] max-w-[1300px] aspect-[5/5]">
                <Image
                  src={data.images[4]}
                  alt=""
                  fill
                  className=" object-cover"
                />
              </div>
              <div className=" relative w-[100vw] max-w-[1300px] aspect-[5/5]">
                <Image
                  src={data.images[1]}
                  alt=""
                  fill
                  className=" object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

{
  /* {data.images.map((img) => (
            <div key={img}>
              <div className=" flex justify-center items-center">
                <div className="relative w-[50vw] max-w-[800px] aspect-[4/5]">
                  <Image src={img} alt="" fill className=" object-cover" />
                </div>
              </div>
            </div>
          ))} */
}
