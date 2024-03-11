import { Group } from "../types/group";

export function filterByAccessibility(groups: Group[]): Group[] {
  return groups.filter((group) => group.closed);
}
