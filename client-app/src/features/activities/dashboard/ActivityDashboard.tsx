import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props) {
  return (
    <Grid>
        <Grid.Column width='10'>
            <ActivityList activities={activities} />
        {/* <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List> */}
        </Grid.Column>
    </Grid>
  )
}
