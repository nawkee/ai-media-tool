"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Andrew",
    avatar: "A",
    title: "Frontend Developer",
    description: "This is the best application I've used!",
  },
  {
    name: "Jessica",
    avatar: "J",
    title: "Graphic Designer",
    description:
      "Your AI tools have transformed the way I create visuals. Absolutely brilliant!",
  },
  {
    name: "Alex",
    avatar: "X",
    title: "Content Creator",
    description:
      "I've tried several media generation tools, but yours stands out. It's a game-changer!",
  },
  {
    name: "Emily",
    avatar: "E",
    title: "Digital Marketer",
    description:
      "Your tools have saved me so much time. The results are stunning, and clients love it!",
  },
  {
    name: "Michael",
    avatar: "M",
    title: "Video Editor",
    description:
      "As a video editor, I rely on top-notch tools. Yours exceeded my expectations. Kudos!",
  },
  {
    name: "Sophie",
    avatar: "S",
    title: "Social Media Manager",
    description:
      "Incredible AI capabilities! My social media content has never looked better. Thank you!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
