import { GridStackOptions } from 'gridstack';

export const BREAKPOINTS = [
  { c: 36, w: 720 },
  { c: 48, w: 840 },
  { c: 72, w: 960 },
  { c: 96, w: 1080 },
  { c: 144, w: 1440 },
  { c: 288, w: 2160 },
];

export const SUB_GRID_OPTIONS: GridStackOptions = {
  acceptWidgets: true,
  minRow: 10,
  margin: 0,
  cellHeight: 10,
  columnOpts: {
    breakpoints: BREAKPOINTS,
    layout: "move",
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
    layout: "move",
  },
  column: 288,
} as const;
