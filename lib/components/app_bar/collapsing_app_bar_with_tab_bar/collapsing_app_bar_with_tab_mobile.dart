import 'package:flutter/material.dart';

class CollapsingAppBarWithTabMobile extends StatelessWidget {
  const CollapsingAppBarWithTabMobile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: DefaultTabController(
        length: 2,
        child: NestedScrollView(
            headerSliverBuilder: (context, value) {
              return [
                const SliverAppBar(
                  floating: true,
                  pinned: true,
                  expandedHeight: 200,
                  title: Text('Collapsing App bar with Tab bar'),
                  bottom: TabBar(tabs: [
                    Tab(
                      text: 'Tab 1',
                    ),
                    Tab(
                      text: 'Tab 2',
                    ),
                    Tab(
                      text: 'Tab 3',
                    ),
                  ]),
                )
              ];
            },
            body: TabBarView(children: [
              ListView.builder(
                  itemCount: 50,
                  itemBuilder: (context, index) {
                    return Text("Item $index");
                  }),
              ListView.builder(
                  itemCount: 50,
                  itemBuilder: (context, index) {
                    return Text("Item $index");
                  }),
              ListView.builder(
                  itemCount: 50,
                  itemBuilder: (context, index) {
                    return Text("Item $index");
                  }),
            ])),
      ),
    );
  }
}
