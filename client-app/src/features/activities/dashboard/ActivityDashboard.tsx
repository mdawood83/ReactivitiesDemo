import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({ activities, selectedActivity, deleteActivity, selectActivity, cancelActivity,
      editMode, openForm, closeForm, createOrEdit, submitting }: Props) {
  return (
    <Grid>
        <Grid.Column width='10'>
            <ActivityList activities={activities}
                selectActivity={selectActivity}
                deleteActivity={deleteActivity}
                cancelActivity={cancelActivity}
                submitting={submitting}
              />
        {/* <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List> */}
        </Grid.Column>
        <Grid.Column width='6'>
            {selectedActivity && !editMode &&
            <ActivityDetails
                activity={selectedActivity}
                cancelActivity={cancelActivity}
                openForm={openForm}
            /> }
            {editMode &&
            <ActivityForm
              closeForm={closeForm}
              activity={selectedActivity}
              createOrEdit={createOrEdit}
              submitting={submitting}
            />}
        </Grid.Column>
    </Grid>
  )
}
