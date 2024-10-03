import { observer } from "mobx-react-lite"
import { Card, Header, Image, Grid, Button, TabPane } from "semantic-ui-react"
import { Photo, Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";
import { SyntheticEvent, useState } from "react";
import PhotoUploadWidget from "../../app/common/imageUpload/PhotoUploadWidget";

interface Props {
    profile: Profile;
}

export default observer(function ProfilePhotos({profile}: Props) {
    const {profileStore: { isCurrentUser, uploadPhoto, uploading, loading, setMainPhoto, deletePhoto }} = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState(false);
    const [target, setTarget] = useState('');

    function handlePhotoUpload(file: Blob) {
        uploadPhoto(file).then(() => setAddPhotoMode(false));
    }

    function handleSetMainPhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        setMainPhoto(photo);
    }

    function handleDeletePhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        deletePhoto(photo);
    }

  return (
    <TabPane>
        <Grid>
            <Grid.Column width={16}>
                <Header floated="left" icon='image' content='Photos' />
                {isCurrentUser && (
                    <Button floated="right"
                        basic
                        content={addPhotoMode ? 'Cancel' : 'Add Photo'}
                        onClick={() => setAddPhotoMode(!addPhotoMode)}
                    />
                )}
            </Grid.Column>
            <Grid.Column width={16}>
                {addPhotoMode ? (
                    <PhotoUploadWidget uploadPhoto={handlePhotoUpload} loading={uploading} />
                ) : (
                    <Card.Group itemsPerRow={5}>
                        {profile.photos?.map(Photo => (
                            <Card key={Photo.id}>
                                <Image src={Photo.url} />
                                {isCurrentUser && (
                                    <Button.Group fluid widths={2}>
                                        <Button
                                            basic
                                            color="green"
                                            content= 'Main'
                                            name={'main' + Photo.id}
                                            disabled={Photo.isMain}
                                            loading={target === 'main' + Photo.id && loading}
                                            onClick={e => handleSetMainPhoto(Photo, e)}
                                        />
                                        <Button
                                            basic
                                            color="red"
                                            icon='trash'
                                            loading={target === Photo.id && loading}
                                            onClick={e => handleDeletePhoto(Photo, e)}
                                            disabled={Photo.isMain}
                                            name={Photo.id}
                                        />
                                    </Button.Group>
                                )}
                            </Card>
                        ))}
                    </Card.Group>
                )}
            </Grid.Column>
        </Grid>
    </TabPane>
  )
})
