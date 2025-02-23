import HorizontalSlider from "../components/HorizontalSlider";

const events = [
  { title: "Event 1", description: "Description of event 1" },
  { title: "Event 2", description: "Description of event 2" },
  { title: "Event 2", description: "Description of event 2" },
  { title: "Event 2", description: "Description of event 2" },
  { title: "Event 2", description: "Description of event 2" },
  { title: "Event 2", description: "Description of event 2" },
  { title: "Event 2", description: "Description of event 2" },
  { title: "Event 2", description: "Description of event 2" },
  { title: "Event 2", description: "Description of event 2" },
  { title: "Event 2", description: "Description of event 2" },
  { title: "Event 2", description: "Description of event 2" },
  
  // ... more events
];

const Page: React.FC = () => {
  return (
    <div>
      <HorizontalSlider
        title="Upcoming Events"
        events={events}
        viewAllLink="/events"
      />
    </div>
  );
};

export default Page;
