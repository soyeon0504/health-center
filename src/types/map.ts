import { Coordinates } from './info';

// 네이버 지도 맵에 대한 타입
export type NaverMap = naver.maps.Map;
// 네이버 마커에 이미지를 데이터 타입
export type ImageIcon = {
  url: string;
  size: naver.maps.Size;
  origin: naver.maps.Point;
  anchor: naver.maps.Point;
}

// 네이버 마커를 위한 데이터 타입
export type Marker = {
  map: NaverMap;
  coordinates: Coordinates;
};