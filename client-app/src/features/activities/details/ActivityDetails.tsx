import { Button } from "semantic-ui-react"
import { useStore } from "../../../app/stores/store";
// import { Activity } from "../../../app/models/activity"

// interface Props {
//     activity : Activity;
//     cancelActivity: () => void;
//     openForm: (id: string) => void;
// }

export default function ActivityDetails() {
    
    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

    if (!activity) return;

  return (
    <div className="ui card fluid">
        <div className="image">
            <img src={`/assets/categoryImages/${activity.category}.jpg`} />
        </div>
        <div className="content">
            <a className="header">{activity.title}</a>
            <div className="meta">
            <span className="date">{activity.date}</span>
            </div>
            <div className="description">
                {activity.description}
            </div>
        </div>
        <div className="extra content">
            <Button.Group widths='2'>
                <Button onClick={() => openForm(activity.id)} basic color="blue" content="Edit"></Button>
                <Button onClick={cancelSelectedActivity} basic color="grey" content="Cancel"></Button>
            </Button.Group>
        </div>
        </div>
  )
}
