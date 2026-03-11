import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivityId?: string | undefined;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;
}

export default function ActivityDashboard({activities, 
  cancelSelectActivity, 
  selectActivity, 
  selectedActivityId,
  openForm,
  closeForm,
  editMode}: Props) {

  const selectedActivity = activities?.find(x => x.id === selectedActivityId);

  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList 
        activities={activities} 
        selectActivity={selectActivity}/>
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && 
        <ActivityDetails
        openForm={openForm}
        activity={selectedActivity}
        cancelSelectActivity={cancelSelectActivity}/>}
        {editMode && 
        <ActivityForm closeForm={closeForm} activity={selectedActivity}/>
        }
      </Grid>
    </Grid>
  );
}
