import { motion } from "framer-motion";
import {
  User,
  Users,
  LifeBuoy,
  HouseHeart,
  Baby,
  Handshake,
  StickyNote,
} from "lucide-react";

const services = [
  {
    title: "Individual Psychotherapy",
    icon: User,
    image: "/individual.png",
    color: "bg-lavender-200",
    content: `Our individual therapy sessions are rooted in understanding your
    individual patterns and needs. It focuses on exploring personal thoughts,
    emotions, and behaviors to address specific mental health concerns. It enables
    a supportive and confidential environment, where you can explore your coping
    strategies, unhealthy relationship patter that can foster emotional healing.
    Over time, it can help individuals lead a more balanced and fulfilling life.`,
  },
  {
    title: "Group Therapy",
    icon: Users,
    color: "bg-lavender-200",
    image: "/groupTherapy.png",
    content: `Relational group therapy focuses on interpersonal dynamics within a
    group setting, where members explore their relationships with others. It
    encourages participants to share experiences, emotions, and challenges,
    fostering connection and mutual understanding. By observing and interacting
    with others, individuals gain insight into their own relational patterns and
    behaviors. The group serves as a supportive environment for practicing new ways
    of relating. This collective process promotes healing, self-awareness, and
    healthier relationships outside the therapy space.`,
  },
  {
    title: "Support Group",
    icon: LifeBuoy,
    image: "/support.png",
    color: "bg-lavender-200",
    content: `A support group provides a safe space for individuals facing similar
    challenges to come together and share their experiences. It fosters a sense of
    community, reducing feelings of isolation by connecting members who understand
    each other's struggles. Through mutual support, participants offer
    encouragement, coping strategies, and emotional comfort. The group is typically
    facilitated by a professional or peer leader, ensuring a structured and
    supportive environment. Support groups help individuals feel empowered and less
    alone in their journey towards healing.`,
  },
  {
    title: "Parent Sessions",
    icon: HouseHeart,
    image: "/parentSession.png",
    color: "bg-lavender-200",
    content: `The goal of a parent session in therapy is to support and enable the young person in their therapeutic journey. Parents often come into these sessions with their own anxieties and concerns about their child's struggles, which can sometimes stem from feelings of helplessness or uncertainty about how to best support their child. These sessions provide a space for parents to express their worries, gain a better understanding of the young person's challenges, and learn strategies to contribute positively to the therapy process. By addressing their own emotions and concerns, parents can become more effective in fostering a nurturing, understanding environment of home Ultimately, parent sessions aim to align the efforts of both the parents and the therapist, creating a more cohesive support system for the young person.
`,
  },
  {
    title: "Diagnosis and Assessment",
    icon: StickyNote,
    image: "/assessment.png",
    color: "bg-lavender-200",
    content: `Diagnosis and assessment in psychology are critical processes used to understand an individual's mental health and behavioral functioning.

Assessment involves gathering information through various tools, such as clinical interviews, psychological tests, observations, and self-reports, to evaluate cognitive, emotional, and behavioral patterns. This comprehensive process helps identify underlying issues, strengths, and areas for growth.

Diagnosis, on the other hand, refers to the formal identification of a mental health disorder based on criteria from diagnostic manuals like the DSM-5 or ICD-11. It involves interpreting assessment data to match symptoms with recognized psychological conditions. The purpose is to provide clarity on the individual's condition, guiding effective treatment planning and interventions for improved mental well-being
`,
  },
  {
    title: "Child & Adolescent Therapy ",
    icon: Baby,
    image: "/childtherapy.png",
    color: "bg-lavender-200",
    content: `Children and adolescents psychotherapy focuses on exploring unconscious emotions, thoughts, and early experiences that influence current behavior and relationships. This therapy helps young people understand the underlying emotional conflicts that may be driving their distress or problematic behaviors. Through play, talk, and creative activities, therapists create a safe environment for self-expression. The goal is to foster emotional insight, develop coping mechanisms, and promote healthier relationships. Over time, the therapy aims to enhance emotional growth, self-awareness, and resilience in children and adolescents.`,
  },
  {
    title: "Corporate Training ",
    icon: Handshake,
    image: "/corporate.png",
    color: "bg-lavender-200",
    content: `This training aims to equip you with essential knowledge and strategies to promote mental well-being in the workplace. By understanding and supporting mental health, we can create a more productive, compassionate, and resilient work environment. This training content is designed to be informative, practical, and supportive in promoting mental health awareness and well-being within corporate settings. Adjust and customize as needed to fit the specific needs and culture of your organization.`,
  },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-white py-36">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-blacksoft mb-20">
          What we offer?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`
    ${service.color}
    relative rounded-3xl overflow-hidden
    shadow-sm hover:shadow-xl
    transform-gpu
    hover:z-20
    hover:bg-lavender-300/30
  `}
              >
                {/* IMAGE */}
                <div className="w-full h-40 overflow-hidden p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  {/* TITLE + ICON */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center">
                      <service.icon size={22} className="text-lavender-700" />
                    </div>

                    <h3 className="text-xl font-medium text-blacksoft">
                      {service.title}
                    </h3>
                  </div>

                  {/* TEXT */}
                  <p className="text-black/80 leading-relaxed line-clamp-3 hover:line-clamp-none transition-all duration-300">
                    {service.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
