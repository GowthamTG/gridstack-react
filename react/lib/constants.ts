import { GridStackOptions } from 'gridstack';

export const BREAKPOINTS = [
  { c: 72, w: 720 },
  { c: 84, w: 840 },
  { c: 96, w: 960 },
  { c: 108, w: 1080 },
  { c: 144, w: 2160 },
];

export const SUB_GRID_OPTIONS: GridStackOptions = {
  acceptWidgets: true,
  minRow: 2,
  margin: 0,
  cellHeight: 10,
  columnOpts: {
    breakpoints: BREAKPOINTS,
    layout: "moveScale",
  },
  column: "auto"
} as const;

export const GRID_OPTIONS: GridStackOptions = {
  acceptWidgets: true,
  float: true,
  subGridOpts: SUB_GRID_OPTIONS,
  margin: 0,
  cellHeight: 10,  
  columnOpts: {
    breakpoints: BREAKPOINTS,
    layout: "moveScale",
  },
  column: 144,
} as const;
