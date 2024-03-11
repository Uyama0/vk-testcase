import { useState } from "react";

import useFetch from "../../hooks/useFetch";

import {
  View,
  Panel,
  Placeholder,
  PanelHeaderBack,
  PanelHeader,
  Group,
  Header,
  SimpleCell,
  Switch,
  Avatar,
  Counter,
  IconButton,
  Button,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

const GroupList = () => {
  const [activePanel, setActivePanel] = useState("list");
  const { groups, loading, error } = useFetch("http://localhost:3000/groups");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <View activePanel={activePanel}>
        <Panel id="list">
          <Group header={<Header mode="secondary">Настройки</Header>}>
            <SimpleCell Component="label" after={<Switch defaultChecked />}>
              Только приватные
            </SimpleCell>
          </Group>
          <Group header={<Header mode="secondary">Список диалогов</Header>}>
            {groups?.map(
              (group) =>
                ((Object.keys(group).length === 5 && !group.friends) ||
                  Object.keys(group).length > 5) && (
                  <SimpleCell
                    key={group.id}
                    before={
                      <Avatar
                        size={40}
                        style={{ backgroundColor: `${group.avatar_color}` }}
                      />
                    }
                    after={
                      <Button
                        mode="tertiary"
                        after={
                          <Counter size="s">
                            {group.friends ? group.friends?.length : 0}
                          </Counter>
                        }
                      >
                        Друзья
                      </Button>
                    }
                    expandable="auto"
                    subtitle={`участников ${group.members_count}`}
                    extraSubtitle={`${group.closed ? "Закрытая" : "Открытая"}`}
                  >
                    {group.name}
                  </SimpleCell>
                )
            )}
          </Group>
        </Panel>
        <Panel id="nothing">
          <PanelHeader
            before={<PanelHeaderBack onClick={() => setActivePanel("list")} />}
          >
            Ничего
          </PanelHeader>
          <Placeholder>Тут ничего нет</Placeholder>
        </Panel>
      </View>
    </div>
  );
};

export default GroupList;
