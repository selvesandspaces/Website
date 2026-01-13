import FounderCard from "../components/Team/FounderCard";
import SupervisorCard from "../components/Team/ExternalSupervisor";
import TeamMemberCard from "../components/Team/TeamMemberCard";

const Team = () => {
  return (
    <section className="bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* FOUNDER */}
        <FounderCard />

        {/* EXTERNAL SUPERVISORS */}
        <div>
          <h3 className="text-2xl font-semibold text-blacksoft mb-10">
            External Supervisors
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SupervisorCard
              name="MS. RADHIKA"
              title="External Supervisors"
              image="/Team/radhika.png"
              intro="I'm Radhika, on independently practicing Queer affirmative psychotherapist based in Bangalore"
              fullBio={
                <>
                  <p>
                    I'm Radhika, on independently practicing Queer affirmative
                    psychotherapist based in Bangalore I hold a Master's degree
                    in Applied Psychology with a specialization in Clinical
                    Psychology from TISS BALM, Chennai, and have been practicing
                    for six years
                  </p>
                  <p>
                    As a Supervisor, my goal is to create a safe and
                    collaborative space where supervisees can reflect on their
                    work with vulnerability and compassion. I believe in
                    fostering an environment that encourages openness. growth,
                    and mutual respect
                  </p>
                </>
              }
            />

            <SupervisorCard
              name="DR POORNIMA VISWANATHAN"
              title="External Supervisors"
              image="/Team/Poornima.jpg"
              intro="Dr. Poornima Viswanathan is a licensed clinical psychologist, researcher, and Assistant Professor at the Jindal School of Psychology and Counselling."
              fullBio={
                <>
                  <p>
                    Dr. Poornima Viswanathan is a licensed clinical
                    psychologist, researcher, and Assistant Professor at the
                    Jindal School of Psychology and Counselling. OP Jindal
                    Global University. She completed her MPhil and PhD in
                    Clinical Psychology from NIMHANS. She is the co-founder and
                    Associate Director of Aagahi. Centre for Psychotherapy
                    research and training, and the Centre for Neurodiversity
                    Studies. Trained in psychodynamic, trauma focused, somatic,
                    and creative therapies, she adopts a person-centred,
                    relational approach.
                  </p>
                  <p>
                    Her work promotes inclusive, neurodiversity affirming and
                    trauma informed care. She is passionate about mentoring
                    future therapists through reflective, skill-building spaces
                    As a Supervisor, my goal is to create a safe and
                    collaborative space where supervisors can reflect on their
                    work with vulnerability and compassion. I believe in
                    fostering an environment that encourages openness, growth,
                    and mutual respect.
                  </p>
                </>
              }
            />

            <SupervisorCard
              name="MS. PAVITHRA"
              title="SENIOR PSYCHOTHERAPIST"
              image="/Team/Pavithra.jpg"
              intro="Pavithra holds a Masters in Clinical Psychology from SRIHER, and takes an eclectic approach, particularly adopting a Transactional Analysis lens and Relational approach."
              fullBio={
                <>
                  <p>
                    Pavithra holds a Masters in Clinical Psychology from SRIHER,
                    and takes an eclectic approach, particularly adopting a
                    Transactional Analysis lens and Relational approach. She
                    aims to create a supportive, evidence-based therapeutic
                    space where the relationship embraces exploration,
                    recognition and acceptance of the different yet unique parts
                    of ourselves.
                  </p>
                </>
              }
            />
          </div>
        </div>

        {/* TEAM MEMBERS */}
        <div>
          <h3 className="text-2xl font-semibold text-blacksoft mb-10">
            Clinical Team
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <TeamMemberCard
              name="MS. ABHIRAMI "
              role="Psychotherapist"
              image="/Team/Abhirami.jpg"
              content="Abhirami holds a Diploma & Masters in Counselling and Psychotherapy from Lady Doak College, and is inclined towards an eclectic therapeutic approach. She facilitates enhancing one's relationship with self and with loved ones through healthy internalization and self reflection, while fostering emotional resilience."
            />
            <TeamMemberCard
              name="MS. JANNANI"
              role="Psychotherapist"
              image="/Team/Janani.jpg"
              content="Jannani holds a Masters in Clinical Psychology from SRIHER, and takes an eclectic approach.
She believes therapy is unique to each person and aims to enhance the therapeutic relationship by working with the client to find the most suitable approach. She envisions providing a safe space which enables healing through a queer affirmative and trauma sensitive approach."
            />
            <TeamMemberCard
              name="MS. SUPRIYA PRASAD"
              role="Clinic Coordinator & Executive Assistant"
              image="/Team/Supriya.jpg"
              content="Supriya holds a Bachelor of Advanced Science (Honours) in Psychology from the University of Auckland, who brings empathy, organization, and a people-first approach to her work. She supports our clinicians, coordinates client care, manages internal processes, and contributes to community-focused initiatives . She's a firm believer that the camera man never dies."
            />
            <TeamMemberCard
              name="MS. SMRUTHI PERAMAIYADASS"
              role="Clinical Pyschologist - On break now"
              image="/images/team/member-4.jpg"
              content="Smruthi holds a Masters in Clinical Psychology from Christ University. She intends to take an intersectional, socially informed & trauma-sensitive stance in her practice, adopting Psychodynamic & Acceptance based approaches catering to the client's needs relative to their current context."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
