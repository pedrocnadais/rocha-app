import { Property } from "@/Types/types";
import CipoApt from '@/Assets/CipoApt.png'
import InglesaApt from '@/Assets/InglesaApt.png'
import RecifeApto from '@/Assets/RecifeApto.png'
import TuimApt from '@/Assets/TuimApt.png'

export const propertiesData: Property[] = [
 {
   title: 'Edf. Humberto Pontes Filho',
   location: 'Jaboatão dos Guararapes-PE',
   size: '270m2',
   rooms: 4,
   latitude: -8.178020415609602,
   longitude: -34.91706887586795,
   imageUrl: RecifeApto,
 },
 {
   title: 'Edf. Itauna',
   location: 'São Paulo-SP',
   size: '160m2',
   rooms: 3,
   latitude: -23.59975804781793,
   longitude: -46.66845677521181,
   imageUrl: TuimApt,
   airbnbLink: 'https://www.airbnb.com/rooms/39749906?viralityEntryPoint=1&unique_share_id=2B683C14-EDD9-44A0-A0AB-EFBFF14E79F0&slcid=9f8e1da4baf541fc9efa8db556087ca1&s=76&feature=share&adults=1&channel=native&slug=IuY7HAnJ&source_impression_id=p3_1727044542_P3m3KMRTzTSo2qma',
 },
 {
   title: 'Edf. Cipó',
   location: 'São Paulo-SP',
   size: '105m2',
   rooms: 2,
   latitude: -23.62419995364312,
   longitude: -46.69354946004461,
   imageUrl: CipoApt,
   airbnbLink: 'https://www.airbnb.com/rooms/1233334284185371705?viralityEntryPoint=1&unique_share_id=7149ECD5-1E09-4961-AAA7-13C8092FB674&slcid=7ccce73f4e1b42b98731ad9dbeb56a79&s=76&feature=share&adults=1&channel=native&slug=LxVztDDY&source_impression_id=p3_1727044896_P3Ju_I6GVqVx1Kgh',
 },
 {
   title: 'Inglesa Residence',
   location: 'São Paulo-SP',
   size: '38m2',
   rooms: 1,
   latitude: -23.49485976707916,
   longitude: -46.610562833132,
   imageUrl: InglesaApt,
   airbnbLink: 'https://www.airbnb.com/rooms/1041216840026278553?viralityEntryPoint=1&unique_share_id=659ECF5F-B45C-4FAA-BD5A-DFDB73180455&slcid=2f5c35fbc930411cbdc16297e3697a9a&s=76&feature=share&adults=1&channel=native&slug=DsNOsR2Z&source_impression_id=p3_1727044901_P3QOVkY5tMYWMjqO',
 },
//  {
//    title: 'Itapema',
//    location: 'Itapema-SC',
//    size: '200m2',
//    rooms: 4,
//    latitude: -27.12004872677802,
//    longitude: -48.60733766271302,
//    imageUrl: undefined
//  },
{
  title: 'Urussuí',
  location: 'São Paulo-SP',
  size: '50m2',
  rooms: 1,
  latitude: -23.584547883491183,
  longitude: -46.67719335872355,
  imageUrl: undefined
},
{
  title: 'Sítio Veneza',
  location: 'Socorro-SP',
  size: '250m2',
  rooms: 4,
  latitude: -22.620345408636247,
  longitude: -46.59199811854522,
  imageUrl: undefined
},
// {
//   title: 'Fazenda Bolívia',
//   location: 'Socorro-SP',
//   size: '400m2',
//   rooms: 4,
//   latitude: -22.60212211742459,
//   longitude: -46.58593693069085,
//   imageUrl: undefined
// },
// {
//   title: 'Clínica',
//   location: 'Socorro-SP',
//   size: '720m2',
//   rooms: 18,
//   latitude: -22.596874133040593,
//   longitude: -46.53211145016127,
//   imageUrl: undefined
// },
// {
//   title: 'Condomínio dos Ipês',
//   location: 'Socorro-SP',
//   size: '3x260m2',
//   rooms: 0,
//   latitude: -22.224978380453024,
//   longitude: -46.336766542411624,
//   imageUrl: undefined
// },
// {
//   title: 'Condomínio Lacqua',
//   location: 'Socorro-SP',
//   size: '450m2',
//   rooms: 0,
//   latitude: -22.575669808313094,
//   longitude: -46.53556236555302,
//   imageUrl: undefined
// },
// {
//   title: 'Luiz Piza',
//   location: 'Socorro-SP',
//   size: '110m2',
//   rooms: 3,
//   latitude: -22.591152351271013,
//   longitude: -46.52722130622922,
//   imageUrl: undefined
// },
] as const;
