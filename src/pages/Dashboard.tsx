import React from "react";
import { createStyles, Grid, Card, Text } from "@mantine/core";
import Area from "../components/charts/Area";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
}));
export default function Dashboard() {
  const { classes, theme } = useStyles();
  return (
    <Grid grow>
      <Grid.Col span={4}>
        <Card withBorder p="xl" radius="md" className={classes.card}>
          <Area />
        </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card withBorder p="xl" radius="md" className={classes.card}>
          <Area />
        </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card withBorder p="xl" radius="md" className={classes.card}>
          <Text size="xl" weight={700} align="center">
            widget!
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card withBorder p="xl" radius="md" className={classes.card}>
          <Area />
        </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card withBorder p="xl" radius="md" className={classes.card}>
          <Area />
        </Card>
      </Grid.Col>
    </Grid>
  );
}
