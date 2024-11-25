import { GridStackOptions } from 'gridstack';

export const BREAKPOINTS = [
  { c: 1, w: 700 },
  { c: 3, w: 850 },
  { c: 6, w: 950 },
  { c: 8, w: 1100 },
];

export const SUB_GRID_OPTIONS: GridStackOptions = {
  acceptWidgets: true,
  column: 144,

  minRow: 2,
  margin: 0,

} as const;

export const GRID_OPTIONS: GridStackOptions = {
  acceptWidgets: true,

  float: true,
  subGridOpts: SUB_GRID_OPTIONS,

  margin: 0,
  column: 144,
} as const;
