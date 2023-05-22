import React, { FC } from "react";
import NavItem from "./NavItem";
import { View, StyleSheet } from "react-native";
import { normalise, pixelSizeVertical } from "../utils/normalize";
import {
  IKnowledgeData,
  INavData,
  IPortfolioData,
  ITransactionData,
} from "../config/tempData";
import Portfolio from "./Portfolio";
import Transaction from "./Transaction";
import Knowledge from "./Knowledge";

interface Props<T> {
  data: T[];
}

const NavItems: FC<Props<INavData>> = ({ data }) => {
  return (
    <View style={styles.btnView}>
      {data.map((i, _) => (
        <NavItem icon={i.icon} tagline={i.tagline} key={_} transform={_ == 0} />
      ))}
    </View>
  );
};

const PortfolioItems: FC<Props<IPortfolioData> & { onPress: () => void }> = ({
  data,
  onPress,
}) => {
  return (
    <View style={portfolioStyles.container}>
      {data.map((item, _) => (
        <Portfolio
          key={_}
          tagline={item.tagline}
          title={item.item}
          onPress={onPress}
        />
      ))}
    </View>
  );
};

const TransactionList: FC<Props<ITransactionData>> = ({ data }) => {
  return (
    <View>
      {data.map(({ price, tagline, title }, index) => (
        <Transaction
          price={price}
          tagline={tagline}
          title={title}
          key={index}
        />
      ))}
    </View>
  );
};

const KnowledgeList: FC<Props<IKnowledgeData>> = ({ data }) => {
  return (
    <View>
      {data.map(({ icon, title }, index) => (
        <Knowledge icon={icon} title={title} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  btnView: {
    flexDirection: "row",
    columnGap: normalise(26),
    marginTop: pixelSizeVertical(20),
  },
});

const portfolioStyles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(244, 244, 244, 1)",
    marginVertical: normalise(25),
    borderRadius: 10,
  },
});

export { NavItems, PortfolioItems, TransactionList, KnowledgeList };
