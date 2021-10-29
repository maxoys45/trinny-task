import AcUnit from '@material-ui/icons/AcUnit'
import { v4 as uuidv4 } from 'uuid'

/*
 * Please do not add all the mock data statically here.
 * While you would solve the problem, you would not be solving the bug ;)
 * */

const defaultMock: any = {
  species: 'Human',
  name: 'Jon Snow',
  icon: AcUnit,
  description: 'You know nothing, Jon Snow.',
}

export const createRowData = ({ name, species, Icon, description }: any) => {
  return {
    id: uuidv4(),
    name: name ? name : defaultMock.name,
    species: species ? species : defaultMock.species,
    icon: Icon ? Icon : defaultMock.icon,
    description: description ? description : defaultMock.description,
  }
}
